/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { ExamWhereUniqueInput } from "../../exam/base/ExamWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProctorWhereUniqueInput } from "../../proctor/base/ProctorWhereUniqueInput";
import { StudentWhereUniqueInput } from "../../student/base/StudentWhereUniqueInput";
import { ViolationListRelationFilter } from "../../violation/base/ViolationListRelationFilter";

@InputType()
class SessionWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  endTime?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ExamWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ExamWhereUniqueInput)
  @IsOptional()
  @Field(() => ExamWhereUniqueInput, {
    nullable: true,
  })
  exam?: ExamWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ProctorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProctorWhereUniqueInput)
  @IsOptional()
  @Field(() => ProctorWhereUniqueInput, {
    nullable: true,
  })
  proctor?: ProctorWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  startTime?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => StudentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StudentWhereUniqueInput)
  @IsOptional()
  @Field(() => StudentWhereUniqueInput, {
    nullable: true,
  })
  student?: StudentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ViolationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ViolationListRelationFilter)
  @IsOptional()
  @Field(() => ViolationListRelationFilter, {
    nullable: true,
  })
  violations?: ViolationListRelationFilter;
}

export { SessionWhereInput as SessionWhereInput };
