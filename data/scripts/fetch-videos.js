#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

// YouTube API Configuration
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || 'code2career_ai';
const API_KEY = process.env.YOUTUBE_API_KEY || '';
const MAX_RESULTS = 12;

// Function to fetch data from YouTube API
function fetchYouTubeVideos() {
  return new Promise((resolve, reject) => {
    if (!API_KEY) {
      console.warn('⚠️  YOUTUBE_API_KEY not found. Using sample data.');
      resolve(null);
      return;
    }

    const url = `https://www.googleapis.com/youtube/v3/search?` +
      `key=${API_KEY}&` +
      `forUsername=${CHANNEL_ID}&` +
      `type=video&` +
      `part=snippet&` +
      `maxResults=${MAX_RESULTS}&` +
      `order=date`;

    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

// Function to transform YouTube API response
function transformVideos(apiResponse) {
  if (!apiResponse || !apiResponse.items) {
    return null;
  }

  return apiResponse.items.map((item) => ({
    id: item.id.videoId,
    videoId: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails.high.url,
    publishedAt: item.snippet.publishedAt,
    channelTitle: item.snippet.channelTitle,
  }));
}

// Main execution
async function main() {
  try {
    console.log('🎥 Fetching YouTube videos...');
    const apiResponse = await fetchYouTubeVideos();
    
    let videos = [];
    if (apiResponse) {
      videos = transformVideos(apiResponse);
      console.log(`✅ Found ${videos.length} videos`);
    } else {
      console.log('ℹ️  Using existing data/sample data');
    }

    const dataPath = path.join(__dirname, '../data/videos.json');
    const fileData = {
      videos: videos.length > 0 ? videos : require(dataPath).videos,
      lastUpdated: new Date().toISOString(),
      source: API_KEY ? 'YouTube API' : 'local'
    };

    fs.writeFileSync(dataPath, JSON.stringify(fileData, null, 2));
    console.log('✅ Videos data updated successfully!');
  } catch (error) {
    console.error('❌ Error fetching videos:', error.message);
    process.exit(1);
  }
}

main();
