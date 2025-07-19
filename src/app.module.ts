import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { MembershipsModule } from './memberships/memberships.module';
import { TasksModule } from './tasks/tasks.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    UsersModule,
    ProjectsModule,
    MembershipsModule,
    TasksModule,
    SubscriptionsModule,
    NotificationsModule,
    AuthModule,
    DatabaseModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
