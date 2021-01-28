const newProjectPrompts = [
    {
        type: 'list',
        name: 'type',
        message: '选择需要的模板',
        choices: [
            'electron',
            'react'
        ]
    }
]

module.exports = {
    newProjectPrompts
}