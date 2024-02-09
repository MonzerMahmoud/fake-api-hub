import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { ParamType } from 'enums/param-type.enum';

@Injectable()
export class FakeDataService {
  generate(model: Record<string, any>) {
    const generatedData = {};
    for (const paramName in model) {
      const paramType = model[paramName];
      console.log(paramName, paramType);
      generatedData[paramName] = this.handleType(paramType);
    }
    return generatedData;
  }
  handleType(type: string) {
    switch (type) {
      // String types
      case ParamType.UUID:
        return faker.string.uuid();
      case ParamType.FullName:
        return faker.person.fullName();
      case ParamType.FirstName:
        return faker.person.firstName();
      case ParamType.LastName:
        return faker.person.lastName();
      case ParamType.Email:
        return faker.internet.email();
      case ParamType.Password:
        return faker.internet.password();
      case ParamType.PhoneNumber:
        return faker.phone.number();
      case ParamType.Sentence:
        return faker.lorem.sentence();

      // Boolean types
      case ParamType.Boolean:
        return faker.datatype.boolean();
      case ParamType.true:
        return true;
      case ParamType.false:
        return false;

      // Numeric types
      case ParamType.int:
        return faker.number.int();
      case ParamType.float:
        return faker.number.float();

      default:
        return 'Unknown type';
    }
  }
}
