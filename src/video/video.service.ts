import { Injectable } from '@nestjs/common';
import { User, Video } from 'src/graphql';
import { VideoDTO } from 'src/video/dto/video.dto';

@Injectable()
export class VideoService {
  private readonly videos: Video[] = [];

  findAll() {
    return this.videos;
  }

  create(videoDTO: VideoDTO) {
    const videoID: number = this.videos.length + 1;
    const video: Video = new Video();
    video.id = videoID.toString();
    video.title = videoDTO.title;
    video.url = videoDTO.url;
    const author: User = new User();
    author.id = videoDTO.userId;
    author.name = 'Author ' + videoDTO.userId;
    video.author = author;
    this.videos.push(video);
    return video;
  }
}
