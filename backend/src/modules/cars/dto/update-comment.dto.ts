import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comments.dto';

export class UpdateCommentsDto extends PartialType(CreateCommentDto) { }