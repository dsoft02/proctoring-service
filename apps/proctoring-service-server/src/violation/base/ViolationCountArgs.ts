/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ViolationWhereInput } from "./ViolationWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ViolationCountArgs {
  @ApiProperty({
    required: false,
    type: () => ViolationWhereInput,
  })
  @Field(() => ViolationWhereInput, { nullable: true })
  @Type(() => ViolationWhereInput)
  where?: ViolationWhereInput;
}

export { ViolationCountArgs as ViolationCountArgs };
