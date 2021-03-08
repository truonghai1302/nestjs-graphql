/* eslint-disable prettier/prettier */
import { Resolver, Query as GQLQuery, Args, Mutation } from '@nestjs/graphql';
import { VideoDTO } from 'src/video/dto/video.dto';
import { VideoService } from 'src/video/video.service';

@Resolver('Video')
export class VideoResolvers {
  constructor(private readonly _videoService: VideoService) { }

  @GQLQuery()
  async videos() {
    return this._videoService.findAll();
  }

  @Mutation()
  async createVideo(@Args('input') args: VideoDTO) {
    return await this._videoService.create(args);
  }
}
