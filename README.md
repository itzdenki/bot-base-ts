# Discord Bot Project (TypeScript + Discord.js v14)

## Cài đặt

1. Sao chép file `.env.example` thành `.env` và điền thông tin bot của bạn:
```
TOKEN=your_discord_bot_token_here
CLIENT_ID=your_client_id_here
GUILD_ID=your_guild_id_here
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Biên dịch TypeScript:
```bash
npx tsc
```

4. Đăng ký lệnh slash:
```bash
node dist/deploy-commands.js
```

5. Khởi động bot:
```bash
node dist/index.js
```

## Cấu trúc dự án

```
discord-bot/
├── src/
│   ├── commands/       # Thư mục chứa các lệnh slash
│   ├── events/         # Thư mục chứa các event handler
│   ├── interfaces/     # Thư mục chứa các interface TypeScript
│   ├── utils/          # Thư mục chứa các utility function
│   ├── index.ts        # File chính của bot
│   └── deploy-commands.ts  # Script đăng ký lệnh slash
├── .env                # File chứa biến môi trường (cần tạo từ .env.example)
├── .eslintrc.json      # Cấu hình ESLint
├── .prettierrc.json    # Cấu hình Prettier
├── package.json        # Cấu hình npm và dependencies
└── tsconfig.json       # Cấu hình TypeScript
```

## Thêm lệnh mới

1. Tạo file mới trong thư mục `src/commands/`
2. Sử dụng mẫu sau:

```typescript
import { SlashCommandBuilder } from 'discord.js';
import { Command } from '../interfaces/Command';

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('tên-lệnh')
    .setDescription('Mô tả lệnh'),
  async execute(interaction) {
    // Xử lý lệnh ở đây
    await interaction.reply('Phản hồi của bạn ở đây');
  },
};

export = command;
```

3. Sau khi thêm lệnh mới, biên dịch lại TypeScript và chạy lại script đăng ký lệnh

## Thêm event mới

1. Tạo file mới trong thư mục `src/events/`
2. Sử dụng mẫu sau:

```typescript
import { Events } from 'discord.js';

module.exports = {
  name: Events.TênEvent,
  once: false, // true nếu event chỉ nên được xử lý một lần
  execute(...args) {
    // Xử lý event ở đây
  },
};
```

## Scripts

Thêm các script sau vào `package.json`:

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "nodemon --exec ts-node src/index.ts",
  "deploy": "ts-node src/deploy-commands.ts",
  "lint": "eslint . --ext .ts",
  "format": "prettier --write \"src/**/*.ts\""
}
```
