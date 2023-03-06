FROM node:slim
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 2300

# Set environment variables
ENV PORT=2300 \
    CLIENT_URL=https://mystreamchat.netlify.app \
    STREAM_API_KEY=nydnu8qz9snv \
    STREAM_PRIVATE_API_KEY=9gj8a6wbsqq8jehpp8zj6rzpsvzawgts53hwfnttmrwceqpky6wy3qgr6uwdxb2n

CMD npm run dev
