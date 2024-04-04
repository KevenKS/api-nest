import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user-dto';
import { UpdatePutUserDTO } from './dto/update-put-user-dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user-dto';

@Controller('users')
export class UsersController {

    @Post()
    async create(@Body() body: CreateUserDTO) {
        return {
            ...body,
            password: undefined
        };
    }

    @Get()
    async read() {
        return {users:[]}
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {
        return {users:[], id}
    }

    @Put(':id')
    async update(@Body() body: UpdatePutUserDTO, @Param('id', ParseIntPipe) id: number) {
        return {
            body, 
            id
        }
    }

    @Patch(':id')
    async updatePartial(@Body() body: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
        return {
            body, 
            id 
        }
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return {
            id
        }
    }
}
