import { useForm, useToggle, upperFirst } from "@mantine/hooks";
import {
  TextInput,
  PasswordInput,
  Paper,
  Group,
  PaperProps,
  Button,
  Anchor,
  Divider,
  Container,
  LoadingOverlay,
} from "@mantine/core";

import { LightDarkButton } from "../../components/LightDarkButton";

import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

import { GoogleButton } from "../../components/SocialButtons/SocialButtons";
import { useState } from "react";
import { HeaderMenuColored } from "../HeaderMenuColored";

export function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle("Entrar", ["Entrar", "Criar conta"]);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validationRules: {
      email: (val) => /^\S+@\S+$/.test(val),
      password: (val) => val.length >= 6,
    },
  });

  const dataSignUp = {
    email: form.values.email,
    password: form.values.password,
  };

  const { SignUp, isLoading } = useContext(AuthContext);

  function handleSubtmit(e: any) {
    e.preventDefault();
    SignUp(dataSignUp);
  }


  return (
    <>
      {/* <HeaderMenuColored  links={links}/> */}
      <Container size={450} my={100}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md" {...props}>
          <LightDarkButton />

          <form onSubmit={handleSubtmit}>
            <Group grow mb="md" mt="md">
              <GoogleButton radius="md">Google</GoogleButton>
            </Group>

            <Divider
              label="Ou continue com email"
              labelPosition="center"
              my="sm"
            />

            <TextInput
              required
              label="Email"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Email inválido"}
            />

            <PasswordInput
              required
              label="Password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "A senha deve incluir pelo menos 6 caracteres"
              }
            />

            <Group position="apart" mt="xl">
              <Anchor
                component="button"
                type="button"
                color="gray"
                onClick={() => toggle()}
                size="xs"
              >
                {type === "Criar conta"
                  ? "Já possui uma conta? Entrar"
                  : "Não possui uma conta? Registrar"}
              </Anchor>

              {type === "Criar conta" ? (
                <Button type="submit" color="indigo" fullWidth>
                  {upperFirst(type)}
                </Button>
              ) : (
                <Button
                  type="submit"
                  color="blue"
                  fullWidth
                  loading={isLoading}
                  loaderPosition="right"
                >
                  {upperFirst(type)}
                </Button>
              )}
            </Group>
          </form>
        </Paper>
      </Container>
    </>
  );
}
