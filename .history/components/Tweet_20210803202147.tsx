import { Box, Stack, Text } from "@chakra-ui/layout"
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"

const Tweet = () => {
    const userName = "nakamura"
    const userId = "12345"
    const publishedAt = new Date()
    let replied = "hiroaki"
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
    return (
        <>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Stack direction="row" spacing="4">
                    <Avatar>
                        <AvatarBadge boxSize="1.25em" />
                    </Avatar>
                    <Box>
                        <Text>{userName}@{userId} {publishedAt}</Text>
                        {
                            replied != "undefined" &&
                            <Text>返信先: @{replied}さん</Text>
                        }
                        <Text>{content}</Text>
                        <Stack direction="row">

                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}

export default Tweet