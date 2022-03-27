import {Controller, Get, UseGuards, Request} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class SampleController {

  @Get('/public')
  async public(@Request() req) {
    return {message: 'public api'}
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/private')
  async private(
      @Request() req,
  ) {
    return {message: 'private api', sub: req.user.sub}
  }

}
