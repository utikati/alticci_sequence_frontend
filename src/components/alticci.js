import { Button, Container, NumberInput, Text } from "@mantine/core";
import { useState } from "react";
import axios from "axios";

function Altici() {
  const [text, setText] = useState("Value will appear here!");
  const [inputNumber, setInputNumber] = useState(
    "Insert the index you want to know from Alticci"
  );

  const content = {
    color: "rgba(0,0,255)",
    padding: "10px",
    marginTop: "10px",
  };

  return (
    <div style={content}>
      <Container>
        <NumberInput
          placeholder="Insert the index you want to know from Alticci"
          label="Alticci Sequence"
          withAsterisk
          value
          onChange={(value) => {
            setInputNumber(value);
          }}
        ></NumberInput>
        <div></div>
        <Text size="xl" color="dark">
          {text}
        </Text>
        <Button
          color="dark"
          variant="outline"
          radius="xl"
          onClick={() => {
            axios
              .get(`http://localhost:8080/alticci/${inputNumber}`)
              .then((response) => {
                setText(
                  `O valor do indice ${inputNumber} é ${response.data.result}`
                );
              })
              .catch((e) => {
                setText("Ocorreu um erro!");
              });
          }}
        >
          Take value
        </Button>
      </Container>
    </div>
  );
}

export default Altici;
