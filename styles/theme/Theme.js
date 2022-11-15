import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    shadows: {
        outline: 'none',
    },

    components: {
        Button: {
            // 1. We can update the base styles
            baseStyle: {

                _focus: {
                    boxShadow: 'none'
                },

            },

        },

    }
})

export default theme