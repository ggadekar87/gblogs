import { render, screen, fireEvent } from '@testing-library/react' // (or /dom, /vue, ...)
import { UnitTest } from './unittest'
import '@testing-library/jest-dom'

it('should show setname button', () => {
    render(<UnitTest />);
    expect(screen.getByTestId('setname')).toBeInTheDocument();
})
it('should show setname button 2', () => {
    render(<UnitTest />);
    expect(screen.getByTestId('setname').textContent).toBe("Click");
})
it('should show setname button toHaveAttribute', () => {
    render(<UnitTest />);
    expect(screen.getByTestId('setname')).toHaveAttribute('id', 'nameButton');;
})
it('should show setname button toHaveValue', () => {
    render(<UnitTest />);
    expect(screen.getByTitle('nameId')).toHaveValue('');;
})

it('should show setname button toBeEnabled', () => {
    render(<UnitTest />);
    expect(screen.getByTestId('setname')).toBeEnabled();;
})
it('should have the "Add" button disabled when initialized', () => {
    render(<UnitTest />);
    expect(screen.getByTestId('setname2')).toBeDisabled();
});

it('should show setname button click', () => {
    render(<UnitTest />);
    const inpt = screen.getByTitle('nameId');
    const btn = screen.getByTestId('setname');
    fireEvent.click(btn);
    expect(inpt.value).toBe("Ganesh");
})

it('should show setname button click3', () => {
    render(<UnitTest />);
    const input = screen.getByTitle('nameId');
    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('23')
})

it('should show setname button checkme', () => {
    render(<UnitTest />);
    const chkBix = screen.getByTitle('checkme');
    expect(chkBix.checked).toBe(false)
})
it('should show setname button checkm2', () => {
    render(<UnitTest />);
    const checkbox = screen.getByTitle('checkme');

    fireEvent.click(checkbox, {
        target: { checked: true },
    })

    expect(checkbox).toBeChecked()
})
it('should show setname button checkm3', () => {
    render(<UnitTest />);
    const checkbox = screen.getByTitle('checkme');

    fireEvent.click(checkbox, {
        target: { checked: true },
    })

    expect(checkbox.checked).toBe(true)
})

it('should show setname button checkm4', () => {
    render(<UnitTest />);
    const checkbox = screen.getByTitle('checkme');
    fireEvent.click(checkbox, {
        target: { checked: true },
    })
    expect(checkbox.checked).toBe(true)
    fireEvent.click(checkbox, {
        target: { checked: false },
    })
    expect(checkbox.checked).toBe(false)
})

it('should show setname button StyleCheck 1', () => {
    render(<UnitTest />);
    const div = screen.getByRole('StyleRole');
    expect(div.textContent).toEqual("StyleCheck")
})

it('should show setname button StyleCheck 2', () => {
    render(<UnitTest />);
    const div = screen.getByRole('StyleRole');
    expect(div.style.width).toBe("200px")
})

it('should show setname button StyleCheck 3', () => {
    render(<UnitTest />);
    const div = screen.getByRole('StyleRole');
    expect(div.style.backgroundColor).toBe("red")
})


it('should show setname button StyleCheck 4', async () => {
    render(<UnitTest />);
    var mockResponse = { sucsess: true, data: "res" }
    const GetData = jest.fn().mockResolvedValue(mockResponse)
    await (async () => {
        var re = GetData();
        expect(re.sucsess).toBe(true)
    })

})


it('should show setname but ton StyleCheck 5', async () => {
    render(<UnitTest />);
    var mockResponse = { sucsess: true, data: "res" }
    const GetData = jest.fn().mockResolvedValue(mockResponse)
    var re = GetData();
    var res;
    // re.then((re) => {
    //     res = re;
    // });
    expect(await re.sucsess).toBe(true);

})