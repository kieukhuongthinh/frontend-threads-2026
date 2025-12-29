---
nav: Threads
order: 7
---

# Video Streaming

One of the core features of a project I worked on this year was high-quality video streaming from multiple sources, along with synchronized recording. The goal was to ensure that, at a later point, users could scrub the timeline to any specific timestamp and view content from all sources accurately synchronized at that moment.

To support this streaming and recording workflow, we used [Socket.IO](https://socket.io/), [mediasoup](https://mediasoup.org/), and [FFmpeg](https://www.ffmpeg.org/).

Below are some of the key scenarios we handled:

- Streaming video from multiple sources to the client
- Recording streams into HLS, including selecting representative frames to generate thumbnails
- Detecting signal loss or service downtime during streaming and recording, and filling those gaps with static frames (black segments) to preserve timeline continuity
- Encrypting all recorded HLS assets and securely fetching decryption keys from the backend
- Requiring the video player to attach authentication headers and tokens to every request in order to access recorded sources

The examples shown below are mock video streams that I used during development to build and refine dynamic layouts and styles for the video streaming page. The core streaming and recording logic was implemented on the backend by another colleague. A deeper dive into that implementation would be more suitable for a separate session—something closer to a _Backend Threads 2025_ discussion—and is therefore outside the scope of this document.
