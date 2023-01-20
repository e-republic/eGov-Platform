import $ from 'jquery';
import 'jquery-modal/jquery.modal.css';
import 'jquery-modal/jquery.modal';
import './modal-configs';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import './scss/index.scss';
import BPMNBuilder from './builder';


const builder = new BPMNBuilder()
builder.init();

// save to xml
$('#save').on('click', function () {
    builder.save();
});
