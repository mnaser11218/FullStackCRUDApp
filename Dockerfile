FROM amazoncorretto:17-alpine as build
WORKDIR /workspace/app

# Copy Maven Wrapper and project files
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

# Make the Maven wrapper executable and install dependencies
RUN chmod +x ./mvnw
RUN ./mvnw clean install -DskipTests

# Final Stage
FROM amazoncorretto:17-alpine
WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=build /workspace/app/target/*.jar app.jar

# Create a non-root user for security (optional but recommended)
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

# Entry point for running the application
ENTRYPOINT ["java", "-jar", "app.jar"]