import { Module } from '@nestjs/common';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { join } from 'path';
// import { AuthModule } from './auth/auth.module';
// import { TodoModule } from './todo/todo.module';
// import * as typeOrmConfig from './typeorm.config';
// import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// @Module({
//   imports: [
//     TypeOrmModule.forRoot(typeOrmConfig),
//     AuthModule,
//     TodoModule,
//     UserModule,
//   ],
// })
