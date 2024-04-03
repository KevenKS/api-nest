import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Post()
    async create(@Body() body) {
        return {body};
    }

    @Get()
    async read() {
        return {users:[]}
    }

    @Get(':id')
    async readOne(@Param() params) {
        return {users:[], params}
    }

    @Put(':id')
    async update(@Body() body, @Param() params) {
        return {
            body, 
            params
        }
    }

    @Patch(':id')
    async updatePartial(@Body() body, @Param() params) {
        return {
            body, 
            params 
        }
    }

    @Delete(':id')
    async delete(@Param() params) {
        return {
            params
        }
    }
}
