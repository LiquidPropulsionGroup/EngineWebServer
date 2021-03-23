FROM gitpod/workspace-full

USER gitpod

RUN sudo apt-get update && \
    sudo apt-get install -y \
        python3.6 \
        nodejs \
        npm \
    && sudo rm -rf /var/lib/apt/lists/*
