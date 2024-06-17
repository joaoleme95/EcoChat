class ContactApp {
    constructor() {
        this.openChatButton = document.getElementById('openChatButton');
        this.chatContainer = document.getElementById('chatContainer');
        this.chatMessages = document.getElementById('chatMessages');
        this.chatInput = document.getElementById('chatInput');
        this.sendButton = document.getElementById('sendButton');

        this.conversationState = "initial";

        this.initialize();
    }

    initialize() {
        this.openChatButton.addEventListener('click', () => this.openChat());
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.chatInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.sendMessage();
            }
        });
    }

    openChat() {
        this.chatContainer.style.display = 'flex';
        this.chatMessages.innerHTML = '';  // Limpa as mensagens anteriores
        this.addMessage('bot', this.getWelcomeMessage());
        this.conversationState = "waiting_option";
    }

    closeChat() {
        this.chatContainer.style.display = 'none';
        this.conversationState = "initial";
    }

    sendMessage() {
        const message = this.chatInput.value.trim();
        if (message !== '') {
            this.addMessage('user', message);
            this.chatInput.value = '';
            this.handleUserResponse(message);
        }
    }

    addMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender);
        messageElement.textContent = text;
        this.chatMessages.appendChild(messageElement);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    handleUserResponse(message) {
        let response = '';
        if (this.conversationState === "waiting_option") {
            response = this.getResponse(message);
            if (message === '8') {
                this.addMessage('bot', response);
                setTimeout(() => this.closeChat(), 1000); // Fecha o chat após 1 segundo
            } else {
                this.addMessage('bot', response);
                this.conversationState = "waiting_option";
            }
        }
    }

    getWelcomeMessage() {
        return `
Bem-vindo ao Chatbot de Sustentabilidade!
Escolha uma das opções abaixo para saber mais:
1. Energia Renovável
2. Reciclagem
3. Agricultura Sustentável
4. Transporte Sustentável
5. Consumo Consciente
6. Preservação da Biodiversidade
7. Gestão de Resíduos
8. Sair
        `;
    }

    getResponse(option) {
        switch (option) {
            case '1':
                return `Energia Renovável: A energia renovável é gerada a partir de recursos naturais que são naturalmente reabastecidos, como a luz solar, o vento, a chuva, as marés e o calor geotérmico. São alternativas limpas e sustentáveis aos combustíveis fósseis, contribuindo para a redução das emissões de gases de efeito estufa. Qual próximo assunto você deseja saber mais?`;
            case '2':
                return `Reciclagem: A reciclagem é o processo de conversão de materiais descartados em novos produtos, reduzindo assim o consumo de matérias-primas, o uso de energia, a poluição do ar e da água. É uma prática fundamental para a gestão sustentável de resíduos e conservação do meio ambiente. Qual próximo assunto você deseja saber mais?`;
            case '3':
                return `Agricultura Sustentável: A agricultura sustentável envolve práticas agrícolas que atendem às necessidades atuais de alimentos e têxteis sem comprometer a capacidade das gerações futuras de atender às suas próprias necessidades. Isso inclui técnicas como rotação de culturas, uso eficiente da água e conservação do solo. Qual próximo assunto você deseja saber mais?`;
            case '4':
                return `Transporte Sustentável: O transporte sustentável se refere a modos de transporte que têm baixo impacto no meio ambiente e promovem a mobilidade eficiente. Isso inclui o uso de veículos elétricos, transporte público, ciclismo e caminhadas, que ajudam a reduzir as emissões de carbono e a poluição do ar. Qual próximo assunto você deseja saber mais?`;
            case '5':
                return `Consumo Consciente: O consumo consciente envolve a escolha de produtos e serviços que tenham um impacto positivo ou reduzido no meio ambiente e na sociedade. Isso inclui considerar a origem dos produtos, a sustentabilidade de sua produção e opções de reutilização e reciclagem. Qual próximo assunto você deseja saber mais?`;
            case '6':
                return `Preservação da Biodiversidade: A preservação da biodiversidade envolve a proteção de ecossistemas e espécies para garantir que a variedade de vida na Terra seja mantida. Isso é crucial para a saúde dos ecossistemas e o bem-estar humano, pois a biodiversidade oferece serviços ecossistêmicos vitais, como purificação da água, polinização e regulação do clima. Qual próximo assunto você deseja saber mais?`;
            case '7':
                return `Gestão de Resíduos: A gestão de resíduos é o conjunto de atividades necessárias para tratar os resíduos desde a sua geração até a sua disposição final. Isso inclui a coleta, transporte, tratamento e disposição de resíduos, bem como a reciclagem e reutilização de materiais para minimizar o impacto ambiental. Qual próximo assunto você deseja saber mais?`;
            case '8':
                return 'Saindo... Obrigado por usar o Chatbot de Sustentabilidade!';
            default:
                return 'Opção inválida! Por favor, escolha uma opção válida.';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ContactApp();
});
