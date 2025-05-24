<template>
    <footer class="footer">
        <hr class="footer-divider" />
        <div class="footer-content">
            <div>
                <p>
                    &copy; 2025 &MediumSpace; <a href="https://atlantissrv.com">Jonathan Turner</a>
                </p>
            </div>
            <nav>
                <a href="https://github.com/yourusername/icarus-eye-site" target="_blank" rel="noopener">GitHub Repo</a> -
                <a href="https://yourportfolio.com" target="_blank" rel="noopener">Portfolio</a>
            </nav>
        </div>
    </footer>
</template>

<style scoped lang="scss">

.footer {
    padding: 1rem 0;
    position: relative;
    bottom: 0;
    width: 100%;
}
.footer-content > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem 0 1rem;
    color: #fff;
}
a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: #9f9f9f;
    }
}

nav {
    padding-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
}

</style>
