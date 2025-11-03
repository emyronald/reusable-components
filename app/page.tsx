'use client'
import React from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Form from './components/Form';
import DataTable from './components/DataTable';
import Card from './components/Card';
import Modal from './components/Modal';
import Spinner from './components/Spinner';
import Toast from './components/Toast';

const Page: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Form submitted with value: ${inputValue}`);
  };

  const tableData = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 25 },
    { id: 3, name: 'Peter Pan', age: 100 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-white">Reusable Components</h1>

      <Card className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Button</h2>
        <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
      </Card>

      <Card className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Form and Input</h2>
        <Form onSubmit={handleFormSubmit}>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter something..."
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold mb-2">Data Table</h2>
        <DataTable data={tableData} />
      </Card>

      <Card className="mb-4 mt-4">
        <h2 className="text-xl font-semibold mb-2">Modal</h2>
        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-semibold mb-2">Modal Content</h2>
          <p>This is the content of the modal.</p>
        </Modal>
      </Card>

      <Card className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Spinner</h2>
        <Spinner />
      </Card>

      <Card className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Toast</h2>
        <Button onClick={() => setShowToast(true)}>Show Toast</Button>
        {showToast && (
          <Toast
            message="This is a toast message."
            onClose={() => setShowToast(false)}
          />
        )}
      </Card>
    </div>
  );
};

export default Page;