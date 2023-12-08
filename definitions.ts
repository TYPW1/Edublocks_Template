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