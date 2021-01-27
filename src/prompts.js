const prompts = [
    {
        type: 'list',
        name: 'tplType',
        message: '选择需要的模板',
        choices: [
            'electron',
            'react'
        ]
    }
]

module.exports = prompts