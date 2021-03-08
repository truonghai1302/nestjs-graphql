/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { VideoResolvers } from "src/video/video.resolvers";
import { VideoService } from "src/video/video.service";

@Module({
  imports: [],
  controllers: [],
  providers: [VideoService, VideoResolvers],
})
export class VideoModule {}