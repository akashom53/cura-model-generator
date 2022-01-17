const defineProps = "{{define_props}}"
const constructorProps = "{{constructor_props}}"
const copyParamProps = "{{copy_props}}"
const copyBodyProps = "{{copy_body_props}}"
const equatableProps = "{{equatable_props}}"
const name = "{{name}}"
const propType = "{{type}}"
const imports = "{{import}}"
const fileName = "{{fileName}}"
const propDefinitionTemlpate = `final ${propType} ${name};`
const propConstructorParamTemlpate = `@required this.${name},`
const propCopyParamTemplate = `${propType} ${name},`
const propCopyBodyTemplate = `${name}: ${name} ?? this.${name},`
const importTemplate = `import '${fileName}.dart';`

const classTemplate = `import 'package:dart_json_mapper/dart_json_mapper.dart';\nimport 'package:equatable/equatable.dart';\nimport 'package:flutter/foundation.dart';\n{{import}}\n\n@immutable\n@jsonSerializable\n@Json(valueDecorators: {{name}}.valueDecorators)\nclass {{name}} extends Equatable {\n  static Map<Type, ValueDecoratorFunction> valueDecorators() => {\n        typeOf<List<{{name}}>>(): (value) =>\n            value.cast<{{name}}>(),\n      };\n  {{define_props}}\n\n  {{name}}({{{constructor_props}}});\n\n  {{name}} copy({{{copy_props}}}) =>\n      {{name}}({{copy_body_props}});\n\n  @override\n  @JsonProperty(ignore: true)\n  List<Object> get props => [{{equatable_props}}];\n}\n`


export const Templates = {
    classTemplate,
    defineProps,
    constructorProps,
    copyParamProps,
    copyBodyProps,
    equatableProps,
    name,
    propType,
    propDefinitionTemlpate,
    propConstructorParamTemlpate,
    propCopyParamTemplate,
    propCopyBodyTemplate,
    imports,
    importTemplate,
    fileName,
}