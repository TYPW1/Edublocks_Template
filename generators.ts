Blockly.Python['import_ai'] = function() {
    var code = 'from ai import Assistant\n';
    return code;
};

Blockly.Python['ai_init'] = function(block) {
    var chatbot = Blockly.Python.nameDB_.getName(block.getFieldValue('chatbot'), Blockly.VARIABLE_CATEGORY_NAME);
    var code = `${chatbot} = Assistant()\n`;
    return code;
};

Blockly.Python['ai_setup'] = function(block) {
    var chatbot = Blockly.Python.nameDB_.getName(block.getFieldValue('chatbot'), Blockly.VARIABLE_CATEGORY_NAME);
    var code = `await ${chatbot}.setup()\n`;
    return code;
};

Blockly.Python['ai_ask'] = function(block) {
    var chatbot = Blockly.Python.nameDB_.getName(block.getFieldValue('chatbot'), Blockly.VARIABLE_CATEGORY_NAME);
    var parameters = Blockly.Python.valueToCode(block, 'parameters', 0);
    var code = `await ${chatbot}.ask(${parameters})`;
    return [code, 0];
};  