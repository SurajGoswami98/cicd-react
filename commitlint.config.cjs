module.exports = {
    extends: [],
    rules: {
        'header-min-length': [2, 'always', 20],
        'header-case-start-capital': [2, 'always'],
        'header-end-period': [2, 'never']
    },
    plugins: [
        {
            rules: {
                'header-min-length': ((raw) => {
                    return [
                        raw.length >= 20,
                        'Commit message must be at least 20 characters long'
                    ]
                }),
                'header-case-start-capital': ((raw) => {
                    return [
                        /^[A-Z]/.test(raw),
                        'Commit message must start with a capital letter'
                    ]
                }),
                'header-end-period': ((raw) => {
                    return [
                        /\.$/.test(raw),
                        'Commit message must not end with a period'
                    ]
                })
            }
        }
    ]
}