const sampleDart = `import 'package:dart_json_mapper/dart_json_mapper.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/foundation.dart';

@immutable
@JsonSerializable()
class DisplayMonitoringAlertType extends Equatable {
  static Map<Type, ValueDecoratorFunction> valueDecorators() => {
        typeOf<List<DisplayMonitoringAlertType>>(): (value) =>
            value.cast<DisplayMonitoringAlertType>(),
      };

  final String alert_type;
  final dynamic icon_single;
  final int id;
  final String cura_code;
  final String color_code;
  final String name;
  final dynamic icon_multi;
  final bool has_reasons;

  DisplayMonitoringAlertType({
    this.alert_type,
    this.icon_single,
    this.id,
    this.cura_code,
    this.color_code,
    this.name,
    this.icon_multi,
    this.has_reasons,
  });

  @override
  @JsonProperty(ignore: true)
  List<Object> get props =>
      [alert_type, icon_single, id, color_code, name, icon_multi, has_reasons];

  DisplayMonitoringAlertType copy({
    String alert_type,
    dynamic icon_single,
    int id,
    String cura_code,
    String color_code,
    String name,
    dynamic icon_multi,
    bool has_reasons,
  }) =>
      DisplayMonitoringAlertType(
        alert_type: alert_type ?? this.alert_type,
        icon_single: icon_single ?? this.icon_single,
        id: id ?? this.id,
        cura_code: cura_code ?? this.cura_code,
        color_code: color_code ?? this.color_code,
        name: name ?? this.name,
        icon_multi: icon_multi ?? this.icon_multi,
        has_reasons: has_reasons ?? this.has_reasons,
      );
}
`;

export default sampleDart