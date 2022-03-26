import {Controller, Get, UseGuards, Request} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class SampleController {

  @Get('/public')
  async getTodos(@Request() req) {
    return {message: 'public api'}
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/private')
  async getTodo(
      @Request() req,
  ) {
    return {message: 'private api', sub: req.user.sub}
  }

}
