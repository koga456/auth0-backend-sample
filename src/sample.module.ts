import { Module } from '@nestjs/common';
import { AuthzModule } from './authz/authz.module';
import {SampleController} from "./sample.controller";

@Module({
  imports: [AuthzModule],
  controllers: [SampleController],
})
export class SampleModule {}
