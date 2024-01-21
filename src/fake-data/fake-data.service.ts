import { Injectable } from '@nestjs/common';
import { ParamTypeHandler } from 'src/handlers/param-type.handler';

@Injectable()
export class FakeDataService {
  generate(model: Record<string, any>) {
    const generatedData = {};
    for (const paramName in model) {
      const paramType = model[paramName];
      generatedData[paramName] = ParamTypeHandler.handleType(paramType);
    }
    return generatedData;
  }
}
