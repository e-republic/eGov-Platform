import $ from 'jquery';
import Modeler from 'bpmn-js/lib/Modeler';

var diagramUrl = 'https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn';


class EventBusLogger {
  constructor(eventBus) {
    const fire = eventBus.fire.bind(eventBus);

    eventBus.fire = (type, data) => {
      console.log(type, data);

      fire(type, data);
    };
  }
}


class BPMNBuilder {
  constructor() {
    this.modeler = new Modeler({
      container: '#canvas',
      keyboard: {
        bindTo: document,
      },
      additionalModules: [
        // { __init__: ["eventBusLogger"], eventBusLogger: ["type", EventBusLogger] }
      ]
    });
    this.elementFactory = this.modeler.get('elementFactory');
    this.elementRegistry = this.modeler.get('elementRegistry');
    this.modeling = this.modeler.get('modeling');

    this.modeler.createDiagram();
  }

  init() {
    this.testingEventListeners();
    this.initModals();
  }

  initModals() {
    $(() => {
      let element = null;
      this.modeler.on('shape.added', function (e) {
        element = e.element;
        $('#configuration-modal').modal();
      });

      $('#new-node-form').on('submit', (e) => {
        e.preventDefault();
        $.modal.close();
        const form = e.target;

        // let selectedElements = this.modeler.get('selection').get();
        // let se1 = this.elementRegistry.get('StartEvent_1');

        this.modeling.updateProperties(element, {
          name: form.name.value,
          extraData: 'hello extra',
        });
      });
    });
  }

  testingEventListeners() {
    let events = [
      // 'element.hover',
      // 'element.out',
      'element.click',
      // 'element.dblclick',
      // 'element.mousedown',
      // 'element.mouseup'
    ];

    events.forEach((eventName) => {
      this.modeler.on(eventName, (e) => {
        // e.element = the model element
        // e.gfx = the graphical element

        console.log(eventName, 'on', e.element);
      });
    });
  }

  save() {
    let se1 = this.elementRegistry.get('StartEvent_1')
    console.log(se1.businessObject.$attrs.extraData)
    this.modeler.saveXML({ format: true, preamble: true })
      .then(({ xml }) => {
        console.log(xml);
        // debugger;
      });

  }

}

export default BPMNBuilder;
