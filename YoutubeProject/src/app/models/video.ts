import { Image } from './image';

export class Video {
    etag: string;
    id: { kind: string, videoId: string };
    kind: string;
    snippet: {
        channelId: string;
        channelTitle: string;
        description: string;
        liveBroadcastContent: string;
        publishedAt: string;
        thumbnails: {
            default: Image;
            high: Image;
            medium: Image;
        };
        title: string;
    };
}
