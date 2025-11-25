module.exports = {
    extends: [],
    rules: {
        'header-min-length': [2, 'always', 20],
        'header-case-start-capital': [2, 'always'],
        'header-end-period': [2, 'always']
    },
    plugins: [
        {
            rules: {
                'header-min-length': (raw) => {
                    const header = raw.header
                    return [
                        header.length >= 20,
                        'Commit message must be at least 20 characters long'
                    ]
                },
                'header-case-start-capital': (raw) => {
                    const header = raw.header
                    return [
                        /^[A-Z]/.test(header),
                        'Commit message must start with a capital letter'
                    ]
                },
                'header-end-period': (raw) => {
                    const header = raw.header
                    return [
                        /\.$/.test(header),
                        'Commit message must end with a period'
                    ]
                }
            }
        }
    ]
}