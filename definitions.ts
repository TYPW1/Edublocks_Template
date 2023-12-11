const aiColor = "#c51a4a";

Blockly.Blocks['import_ai'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("from ai import Assistant");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(aiColor);
    }
};

Blockly.Blocks['ai_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("chatbot"), "chatbot")
        .appendField(" = Assistant()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiColor);
  }
};

Blockly.Blocks['ai_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("await ")
        .appendField(new Blockly.FieldVariable("chatbot"), "chatbot")
        .appendField(".setup()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiColor);
  }
};

Blockly.Blocks['ai_ask'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("await ")
        .appendField(new Blockly.FieldVariable("chatbot"), "chatbot")
        .appendField(".ask(");
    this.appendValueInput("parameters")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(aiColor);
  }
};  