import { Box, Card, Flex } from "@radix-ui/themes";
import { Skeleton } from "@/app/component";

const LoadingIssueDetailPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap="3" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;
