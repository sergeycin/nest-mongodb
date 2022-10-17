import { Body, Controller,Delete,Get , Header, HttpCode, HttpStatus, Param, Post, Put, Redirect} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {

    @Get()
    @Redirect('https://google.com', 301)
    getAll(){
        return 'getAll'
    }

    @Get(':id')
    getOne(@Param() params): string{
        return 'getone' + params.id
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() createProductDto: CreateProductDto){
        return `Title ${createProductDto.title}`
    }

    @Delete(':id')
    remove(@Param(':id') params): string{
        return 'Remove'  
    }
    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string){
        return 'Update' + id
    }
}
