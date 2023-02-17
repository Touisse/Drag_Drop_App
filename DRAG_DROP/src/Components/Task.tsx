import { Box, IconButton, Textarea } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import React from "react";
import { TaskModel } from "../Utils/models";

type TaskProps = {
  index: Number,
  task: TaskModel,
};

function Task({ index, task }: TaskProps) {
  return (
    <Box
      as="div"
      role="group"
      position="relative"
      rounded="lg"
      w={200}
      pl={3}
      pr={7}
      pt={3}
      pb={1}
      boxShadow="xl"
      cursor="grab"
      fontWeight="bold"
      userSelect="none"
      bgColor={task.color}
    >
      <IconButton
        position="absolute"
        top={0}
        right={0}
        zIndex={100}
        aria-label="delete-task"
        size="md"
        colorScheme="solid"
        color={"gray.700"}
        icon={<DeleteIcon />}
        opacity={0}
        _groupHover={{
          opacity: 1,
        }}
        // onClick={handleDeleteClick}
      />
      <Textarea
        value={task.title}
        fontWeight="semibold"
        cursor="inherit"
        border="none"
        p={0}
        resize="none"
        minH={70}
        maxH={200}
        focusBorderColor="none"
        color="gray.700"
        // onChange={handleTitleChange}
      />
    </Box>
  );
}

export default Task;
