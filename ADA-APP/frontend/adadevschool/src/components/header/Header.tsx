import { useState } from 'react'
import './Header.css'

import { Box, Flex, Button, Link, Icon, Spacer } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";


const NavBar: React.FC = () => {
  return (
    <Box bg="blue.600" px={4} py={2} boxShadow="md">
      <Flex align="center" maxW="1200px" mx="auto">
        {/* Icono */}
        <Icon as={FaReact} w={8} h={8} color="white" />
        
        {/* Elementos de la barra */}
        <Flex ml={8} gap={6} color="white" fontWeight="bold">
          <Link href="#">Inicio</Link>
          <Link href="#">Servicios</Link>
          <Link href="#">Cursos</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Acerca</Link>
          <Link href="#">Contacto</Link>
        </Flex>

        <Spacer />

        {/* Botones */}
        <Flex gap={4}>
          <Button colorScheme="teal" variant="outline">Iniciar Sesión</Button>
          <Button colorScheme="teal">Registrarse</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
