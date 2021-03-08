/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { VideoModule } from "src/video/video.module";

@Module({
  imports: [
    VideoModule,
    GraphQLModule.forRoot({
      typePaths:['./**/*.graphql']
    }),
  ],
})
export class AppModule {} 