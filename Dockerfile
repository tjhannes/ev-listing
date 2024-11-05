FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json and prisma
COPY package*.json ./
COPY prisma/ /app/prisma/

# Install dependencies
RUN npm install
RUN npm install -g prisma

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build
#RUN npm run db:generate

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["sh", "-c", " npm run db:push && npm run seed && npm run start"]
