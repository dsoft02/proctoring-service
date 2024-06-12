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
import { IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ExamWhereUniqueInput } from "../../exam/base/ExamWhereUniqueInput";
import { ProctorWhereUniqueInput } from "../../proctor/base/ProctorWhereUniqueInput";
import { StudentWhereUniqueInput } from "../../student/base/StudentWhereUniqueInput";
import { ViolationCreateNestedManyWithoutSessionsInput } from "./ViolationCreateNestedManyWithoutSessionsInput";

@InputType()
class SessionCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endTime?: Date | null;

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
  exam?: ExamWhereUniqueInput | null;

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
  proctor?: ProctorWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startTime?: Date | null;

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
  student?: StudentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ViolationCreateNestedManyWithoutSessionsInput,
  })
  @ValidateNested()
  @Type(() => ViolationCreateNestedManyWithoutSessionsInput)
  @IsOptional()
  @Field(() => ViolationCreateNestedManyWithoutSessionsInput, {
    nullable: true,
  })
  violations?: ViolationCreateNestedManyWithoutSessionsInput;
}

export { SessionCreateInput as SessionCreateInput };
