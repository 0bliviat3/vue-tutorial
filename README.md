# vue-tutorial

## pull image
```
docker pull 0bliviate/vue_test:master
```

## vue + nginx + springboot + redis
### docker-compose.yml
```
services:
  frontend:
    image: 0bliviate/vue_test:master
    ports:
      - "80:80"  # 외부 공개 포트
    depends_on:
      - backend  # 프론트엔드는 백엔드가 실행된 후 실행됨
    networks:
      - frontend-backend
  backend:
    image: 0bliviate/springboot-redis-test:master
    container_name: backend
    expose:
      - "8080"
    environment:
      - SPRING_REDIS_HOST=redis  # Redis 연결 (Redis 컨테이너 이름)
    depends_on:
      - redis  # 백엔드는 Redis가 실행된 후 실행됨
    networks:
      - frontend-backend
  redis:
    image: redis:alpine  # Redis 공식 이미지 사용
    expose:
      - "6379"
    networks:
      - frontend-backend
networks:
  frontend-backend:
    driver: bridge
```

