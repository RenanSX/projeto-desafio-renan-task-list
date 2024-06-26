# Arquitetura do Task List

## Visão Geral

Este documento mostra como a arquitetura do projeto TaskList backend foi montada e as decisões por trás de cada uma.

## Arquitetura do Backend

A arquitetura do backend foi cuidadosamente escolhida para atender às especificidades do Task List, buscando equilíbrio entre desempenho, capacidade de expansão e simplicidade de manutenção.

### Clean Architecture

- **Escolha Arquitetural:** Essa abordagem ajuda a manter uma separação clara entre o núcleo do negócio e as interfaces de usuário, além de frameworks e bancos de dados. Isso torna o sistema mais fácil de testar e menos dependente de tecnologias específicas.

- **Organização em Camadas:** Separei a aplicação em várias camadas, como Apresentação, Aplicação, Domínio e Infraestrutura, com cada uma tendo suas próprias tarefas definidas.

- **Independência entre Camadas:** Cada camada funciona de forma independente, se comunicando através de interfaces bem estabelecidas.

### Domain-Driven Design (DDD)

- **Adoção do DDD:** Usei o Domain-Driven Design para que o design do backend refletisse bem as regras e processos de negócio do Task List. Isso ajuda a garantir que o código esteja alinhado com as necessidades e complexidades específicas do projeto.

- **Modelagem de Domínio:** Criei modelos de domínio que definem a estrutura de dados e as regras de negócio, atuando como o coração do sistema.

- **Contextos Limitados:** Organizei o código em contextos limitados para manter as funcionalidades relacionadas juntas e separadas de outras partes do sistema.

## Conclusão

A escolha dessa arquitetura reflete minha dedicação em construir um backend bem integrado, eficiente e preparado para crescer junto com o Task List.

![clean_arch](../images/clean_arch.png)
