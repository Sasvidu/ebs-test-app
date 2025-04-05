import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return await this.prisma.todo.create({
      data: createTodoDto,
    }) as Todo;
  }

  async findAll(): Promise<Todo[]> {
    return await this.prisma.todo.findMany() as Todo[];
  }

  async findOne(id: number): Promise<Todo | null> {
    return await this.prisma.todo.findUnique({
      where: { id },
    }) as Todo | null;
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return await this.prisma.todo.update({
      where: { id },
      data: updateTodoDto,
    }) as Todo;
  }

  async remove(id: number): Promise<Todo> {
    return await this.prisma.todo.delete({
      where: { id },
    }) as Todo;
  }
}
