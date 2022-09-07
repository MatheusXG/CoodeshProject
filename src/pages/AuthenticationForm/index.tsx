import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";

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
import { useContext, useState } from "react";

import { GoogleButton } from "../../components/SocialButtons/SocialButtons";

import { Link, useNavigate } from "react-router-dom";



export function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(["Login", "Register"]);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const dataSignUp = {
    email: form.values.email,
    password: form.values.password,
  };

  const { SignUp, isLoading } = useContext(AuthContext);
  let navigate = useNavigate();


  function handleSubmit() {
    try {
      { type === "Register" && SignUp(dataSignUp) }

    } catch (error) {
      
    }

    
  }

  return (
    <>
      <Container size={450} my={100}>
      

        <Paper withBorder shadow="md" p={30} mt={30} radius="md" {...props}>
          <LightDarkButton />

          <form onSubmit={form.onSubmit(handleSubmit)}>
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
              mt={15}
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
                {type === "Register"
                  ? "Já possui uma conta? Entrar"
                  : "Não possui uma conta? Registrar"}
              </Anchor>

              {type === "Register" ? (
                <Button
                  type="submit"
                  color="indigo"
                  fullWidth
                  loading={isLoading}
                >
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
