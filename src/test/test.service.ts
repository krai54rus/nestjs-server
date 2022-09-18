import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTestDto } from './dto/create-test.dto';
import { Test } from './test.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private readonly testsRepository: Repository<Test>,
  ) {}

  create(createTestDto: CreateTestDto): Promise<Test> {
    const test = new Test();
    test.firstName = createTestDto.firstName;
    test.lastName = createTestDto.lastName;

    return this.testsRepository.save(test);
  }

  async findAll(): Promise<Test[]> {
    return this.testsRepository.find();
  }

  findOne(id: number): Promise<Test> {
    return this.testsRepository.findOneBy({ id: id });
  }

  async remove(id: string): Promise<void> {
    await this.testsRepository.delete(id);
  }
}
